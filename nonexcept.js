$(function() {
    // Assuming list is an object with relevant properties
    var list = {
        container: '#example-list',
        draggedItem: null
    };

    // Set up a drag start event listener (this is simplified for demonstration)
    $('#example-list li').on('mousedown', function() {
        list.draggedItem = $(this);
        
        list.draggedItem.attr(
            "data-origpos", 
            $(this).closest("[data-listidx]").attr("data-listidx") + "-" + 
            $(list.container).children().index(list.draggedItem)
        );

        console.log('Dragged item original position:', list.draggedItem.attr("data-origpos"));
    });
});
