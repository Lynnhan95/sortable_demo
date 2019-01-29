Sortable.create(list1, {
    group:{
        name:'list1',
        put:'list2'
    },
    animation: 150,
    ghostClass: 'ghost',
    swapThreshold: 1,
    store: {
		/**
		 * Get the order of elements. Called once during initialization.
		 * @param   {Sortable}  sortable
		 * @returns {Array}
		 */
		get: function (sortable) {
			var order = localStorage.getItem(sortable.options.group.name);
			return order ? order.split('|') : [];
		},

		/**
		 * Save the order of elements. Called onEnd (when the item is dropped).
		 * @param {Sortable}  sortable
		 */
		set: function (sortable) {
			var order = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, order.join('|'));
		}
    }
    
  });

Sortable.create(list2,{
    group:{
        name:'list2',
        put:'list1',
        pull:'list1'
    },
     animation: 150,
    ghostClass: 'ghost',
    swapThreshold: 1,
    
})
