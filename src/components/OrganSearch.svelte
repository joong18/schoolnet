<script>
    import { onMount } from 'svelte';
    import { organs, organ } from '../stores';

    let organName = '';
    let search_result = [];
    let hiddenResult = true;
    let currentIndex = 0;
    let visibleIndex = 0;
    let resultItemHeight = 40;
    let resultPanelHeight = 0;
    let resultPanel;

    const changeOrgan = (organId) => {
        organ.initOrgan(organId);
        hiddenResult = true;
        organName = '';
    }
    
    const handlerSearchButtonKey = (e) => {

        let searchValue = e.target.value.trim();

        hiddenResult = true;

        if (searchValue === '') {
            currentIndex = 0;
            visibleIndex = 0;
            return;
        }
        search_result = $organs.filter(elem => elem.searchString.includes(organName));

        if (search_result.length === 0) return;

        if(search_result.length < 10) {
          resultPanelHeight = resultItemHeight * search_result.length;
        } else {
          resultPanelHeight = resultItemHeight * 10;
        }

        hiddenResult = false;

        if (e.key === 'Enter' && search_result.length === 1) {
            changeOrgan(search_result[0].id);
            currentIndex = 0;
            visibleIndex = 0;
        }

        if (e.key === 'Enter') {
            if ( currentIndex >= 0 && currentIndex < search_result.length) {
                changeOrgan(search_result[currentIndex].id);
                currentIndex = 0;
                visibleIndex = 0;
            }
        }

        if (e.key === 'Escape') {
            hiddenResult = true;
            currentIndex = 0;
            visibleIndex = 0;
        }

        if (e.key === 'ArrowUp') {
            if (currentIndex > 0) {
                currentIndex -= 1;
                visibleIndex -= 1;
                if (visibleIndex < 0) {
                    visibleIndex = 0
                    // const resultPanel = document.getElementById('search-result');
                    resultPanel.scrollTop -= resultItemHeight;
                }
            }
        }

        if (e.key === 'ArrowDown') {
            if (currentIndex < search_result.length -1 ) {
                currentIndex += 1;
                visibleIndex += 1;
                if (visibleIndex > 9) {
                    visibleIndex = 9;
                    // const resultPanel = document.getElementById('search-result');
                    resultPanel.scrollTop += resultItemHeight;
                }
            }
        }
    }

    const closeResultPanel = () => {
        hiddenResult = true;
    }
    
    onMount(() => {
        organs.fetchOrgans();
        // resultPanel = document.getElementById('search-result');
    });

</script>

<div class="relative my-2">

    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-text" 
        placeholder="학교명을 입력하세요." autocomplete="off" required bind:value={organName} on:keyup={handlerSearchButtonKey}>

    <img class="absolute top-[25%] right-2" src="/images/search.svg" width="20" height="20" alt=""/>

    <div class="absolute top-12 w-full" class:hidden={hiddenResult}>
        <div class="flex justify-end py-1 pr-2 bg-indigo-100">
            <button class="hover:bg-indigo-400 rounded mr-3" on:click={closeResultPanel}>
                <img src="images/close.svg" width="20" height="20" alt="close">
            </button>
        </div>
        <div class=" w-full bg-indigo-100 overflow-y-auto" id="search-result" style="height:{resultPanelHeight}px;" bind:this={resultPanel} >
            <ul class="text-sm">
                {#if search_result}
                    {#each search_result as {id, name, ctrlorg}, i (id)}
                        <div class="p-1 hover:bg-indigo-400 hover:cursor-pointer" style="height:{resultItemHeight}px;"
                            class:bg-indigo-400={currentIndex === i} on:click={changeOrgan(id)} >
                            <li class="my-1 pl-2">{name} ({ctrlorg})</li>
                        </div>
                    {/each}
                {/if}
            </ul>
        </div>
    </div>
</div>