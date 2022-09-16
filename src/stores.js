import { writable, get } from "svelte/store";
import { getApi, putApi, delApi, postApi } from "./service/api";
import { router } from 'tinro';
import { chosung } from './service/searchutils.js';

function setOrgans() {

    const { subscribe, set } = writable([]);

    const fetchOrgans = async () => {
        
        const localOrgans = JSON.parse(localStorage.getItem('organs'));

        if (localOrgans) {
            set(localOrgans);
            return;
        }
            
        try {
            const getDatas = await getApi({path: `/organs`});
            const newDatas = getDatas.map( elem => {
                let searchString = elem.name + ',';
                if (elem.name.includes('여자상업고등학교')) {
                    searchString += elem.name.replace('여자상업고등학교', '여상');
                } else if (elem.name.includes('상업고등학교')) {
                    searchString += elem.name.replace('상업고등학교', '상고');
                } else if (elem.name.includes('여자고등학교')) {
                    searchString += elem.name.replace('여자고등학교', '여고');
                } else if (elem.name.includes('공업고등학교')) {
                    searchString += elem.name.replace('공업고등학교', '공고');
                } else if (elem.name.includes('고등학교')) { 
                    searchString += elem.name.replace('고등학교', '고');
                } else if (elem.name.includes('중학교')) { 
                    searchString += elem.name.replace('중학교', '중');
                } else if (elem.name.includes('초등학교')) { 
                    searchString += elem.name.replace('초등학교', '초');
                } else {
                    searchString += ''
                }
                searchString += ',' + chosung(searchString);
                elem.searchString = searchString;
                return elem;
            })
            set(newDatas);
            localStorage.setItem('organs', JSON.stringify(newDatas));
        }
        catch (error) {
            throw error;
        }
    }

    return {
        subscribe,
        fetchOrgans
    }
}

function setOrgan() {

    const resetAll = () => {
        devices.reset();
        isAlive.reset();
        ports.reset();
        currentDevice.set(0);
        links.reset();
    }

    const initOrgan = async (organId) => {
        resetAll();
        fetchOrgan(organId);
        devices.fetchDevices(organId);
        isAlive.fetchIsAlive(organId);
        links.fetchLinks(organId);
    }

    const { subscribe, set } = writable({});

    const fetchOrgan = async (organId) => {

        resetAll();

        try {
            const getDatas = await getApi({path: `/organ/${organId}`});
            set(getDatas);
        }
        catch (error) {
            throw error;
        }
    }

    return {
        subscribe,
        initOrgan,
        fetchOrgan,
    }
}

function setDevices() {

    let values = [];

    const reset = () => {
        set([]);
    }

    const { subscribe, set} = writable(values);

    const fetchDevices = async (organId) => {
        
        try {
            const getDatas = await getApi({path: `/organ/${organId}/devices`});
            if(getDatas.length !== 0) {
                // 장비코드ID로 일차 정렬, IP주소로 이차 정렬
                getDatas.sort((a,b) => a.devcodeid - b.devcodeid).sort((a, b) => a.ipnum - b.ipnum);
            }
            set(getDatas);
        }
        catch (error) {
            throw error;
        }
    }

    return {
        reset,
        subscribe,
        fetchDevices,
    }
}

function setIsAlive() {

    const { subscribe, set } = writable(new Map());

    const reset = () => {
        set(new Map());
    }

    const fetchIsAlive = async (organId) => {
        
        let aliveMap = new Map();

        try {
            
            const getDatas = await getApi({path: `/organ/${organId}/isalive`});
            if(Object.keys(getDatas).length !== 0) {
                Object.entries(getDatas).forEach(e => aliveMap.set(Number(e[0]), e[1]))
            }
            set(aliveMap);
        }
        catch (error) {
            throw error;
        }
    }

    return {
        reset,
        subscribe,
        fetchIsAlive,
    }
}

function setPortStatus() {

    let deviceMap = new Map();

    const reset = () => {
        deviceMap.clear()
    }

    const getPortStatus = async (deviceId) => {
        if(!deviceMap.has(deviceId)) {
            deviceMap.set(deviceId, writable([]));
        }
        await fetchPortStatus(deviceId);
    }

    const getPortStatusStore = (deviceId) => {
        return deviceMap.get(deviceId);
    }

    const hasPortStatusStore = (deviceId) => {
        return deviceMap.has(deviceId);
    }

    const fetchPortStatus = async (deviceId) => {
   
        if(!deviceMap.has(deviceId)) {
            deviceMap.set(deviceId, writable([]));
        }
        try {
            const getDatas = await getApi({path: `/device/${deviceId}/portstatus`});
            deviceMap.get(deviceId).set([new Date().getTime(), getDatas]);
        }
        catch (error) {
            throw error;
        }
    }

    return {
        reset,
        hasPortStatusStore,
        getPortStatusStore,
        fetchPortStatus,
    }
}


function setAllDevices() {
    let values = [];
    const { subscribe, update } = writable(values);

    const fetchOrganAllDevice = async () => {
        const {organId} = get(organ);
        try{
            const getDatas = await getApi({path: `/organ/${organId}/alldev`});
            update( datas => {
                datas = getDatas;
                return datas;
            });
        }
        catch (error) {
            throw error;
        }
    }

    return {
        subscribe,
        fetchOrganAllDevice
    }
}

function setAllPortStatus() {
    let initValues = [];

    let values = initValues;

    const { subscribe, update } = writable(values);

    const fetchAllDevicePortStatus = async () => {
        const devicelist = get(allDevices);
        // console.log(devicelist);
        for (const d of devicelist) {
            if (d.alive && !d.name.includes('VIP') && d.project.includes('스쿨넷')){
                try{    
                    const getDatas = await getApi({path: `/device/${d.devid}/status`});
                    console.log(getDatas);
                    // update( datas => {
                    //     datas = [...datas, getDatas.json()]
                    //     return datas;
                    // });
                }
                catch (error) {
                    throw error;
                }
            }
        }        
    }
    
    return {
        subscribe,
        fetchAllDevicePortStatus,
    }
}

function setLinks() {

    const { subscribe, set } = writable([]);

    const reset = () => {
        set([]);
    }

    const fetchLinks = async (organId) => {
        
        let links = [];

        try {
            
            const getDatas = await getApi({path: `/organ/${organId}/links`});
            if(getDatas.length !== 0) {
                links = getDatas
            }
            set(links);
        }
        catch (error) {
            throw error;
        }
    }

    return {
        reset,
        subscribe,
        fetchLinks,
    }
}

export const organs = setOrgans();
export const organ = setOrgan();
export const devices = setDevices();
export const isAlive = setIsAlive();
export const ports = setPortStatus();
export const currentDevice = writable(0);

export const allDevices = setAllDevices();
export const allDevicePortStatus = setAllPortStatus();
export const links = setLinks()