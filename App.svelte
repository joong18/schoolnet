<script>
	let storedItems = [
		{ id: 0, name: "사과"},
		{ id: 1, name: "포도"},
		{ id: 2, name: "딸기"},
	];
	let items = storedItems;
	function clearItems(){
		items = [];
	}
	function restoreItems(){
		items = storedItems;
	}
</script>

<h1>장바구니</h1>
<button on:click={clearItems}>비우기</button>
<button on:click={restoreItems}>복구하기</button>
<ul>
	{#each items as aItems, i}
		<li>index: {i} - {aItems.name}</li>
	{:else}
		<li>장바구니가 비었습니다.</li>
	{/each}
</ul>