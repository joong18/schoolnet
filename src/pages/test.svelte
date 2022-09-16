<script>
    let count = 0;
    let double = 0;
    

    function changeCount() {
        count += 1;
    }

    function changeDouble() {
        double += 1;
    }

    $: if (count > 0) {
        console.log("if", double);
    }

</script>

<h1>테스트 Count : {count}</h1>
<h1>테스트 Double : {double}</h1>
<button class="bg-yellow-200" on:click={changeCount}>Count 변경</button>
<button class="bg-red-200" on:click={changeDouble}>Double 변경</button>
