$(document).ready(() => {
    const mesureWidth = item => {
        let reqItemWidth = 0;
    
        const screenWidth = $(window).width();
        const container = item.closest(".product-menu");
        const titlesBlocks = container.find(".product-menu__title");
        const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
    
    
        const textContainer = item.find(".product-menu__container")
        const paddingLeft = parseInt(textContainer.css("padding-left"));
        const paddingRight = parseInt(textContainer.css("padding-right"));
    
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        
        if (isMobile) {
            reqItemWidth = screenWidth - titlesWidth;
        } else {
            reqItemWidth = 524;
        }
        
        return {
            container: reqItemWidth,
            textContainer: reqItemWidth - paddingRight - paddingLeft
        }
    }
    
    const closeEveryItemInContainer = container => {
        const items = container.find(".product-menu__item");
        const content = container.find(".product-menu__content");
    
        items.removeClass("active");
        content.width(0);
    }
    
    const openItems = item => {
        const hiddenContent = item.find(".product-menu__content");
        const reqWidth = mesureWidth(item);
        const textBlock = item.find(".product-menu__container");
    
        item.addClass("active");
        hiddenContent.width(reqWidth.container);
        textBlock.width(reqWidth.textContainer);
    };
    
    $(".product-menu__title").on("click", e => {
        e.preventDefault();
    
        const $this = $(e.currentTarget);
        const item = $this.closest(".product-menu__item");
        const itemOpen = item.hasClass("active");
        const container = $this.closest(".product-menu");
    
        if (itemOpen) {
            closeEveryItemInContainer(container);
        } else {
            closeEveryItemInContainer(container);
            openItems(item);
        }
    });
});