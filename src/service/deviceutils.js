const portColors = {
    "down": "#AAAAAA",
    "10": "#FF8200",
    "100": "#FFC81E", 
    "1000": "#96F56E",
    "10000": "#8282FF", 
}

const paintPortColor = (portStatusList, dom_root) => {
    let dom_ports;
    portStatusList.forEach(p => {
        if(p.port !== null) {
            dom_ports = dom_root.querySelectorAll(".port-" + String(p.port).padStart(2,"0"));
            if(p.status === 'down') {
                dom_ports.forEach( dom => dom.style.fill = portColors['down']);
            } else {
                dom_ports.forEach( dom => dom.style.fill = portColors[p.speed]);
            }
        } 
    });
}

const paintDeviceDownColor = (dom_root) => {
    let dom_paths = dom_root.querySelectorAll('.port');
    for (let i = 0; i < dom_paths.length; i++) {
        dom_paths.item(i).style.fill = portColors['down'];
    }
}

export {
    paintPortColor,
    paintDeviceDownColor,
}