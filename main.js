var updateItem = false;
Sortable.create(list1, {
    group:{
        name:'list1',
        // put:'list2'
    },
    animation: 150,
    ghostClass: 'ghost',
    swapThreshold: 0.4,
    store: {
		/**
		 * Get the order of elements. Called once during initialization.
		 * @param   {Sortable}  sortable
		 * @returns {Array}
		 */
		// get: function (sortable) {
		// 	var order = localStorage.getItem(sortable.options.group.name);
		// 	return order ? order.split('|') : [];
		// },

		/**
		 * Save the order of elements. Called onEnd (when the item is dropped).
		 * @param {Sortable}  sortable
		 */
		set: function (sortable) {
			var order = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, order.join('|'));
		}
	},
	onUpdate: function(evt){
		var itemEl = evt.item
		// console.log(itemEl)
		updateItem = true;
	},
	onChange: function(ele){
		var newIndex = ele.newIndex + 1;
		console.log('newIndex' + newIndex)
		var oldIndex = ele.oldIndex + 1;
		console.log('oldIndex'+ oldIndex)
		var glyphicon = document.getElementsByClassName('glyphicon');

		// glyphicon.textContent = newIndex;
	}
	

    
  });

// Sortable.create(list2,{
//     group:{
//         name:'list2',
//         put:'list1',
//         pull:'list1'
//     },
//      animation: 150,
//     ghostClass: 'ghost',
//     swapThreshold: 1,
    
// });

