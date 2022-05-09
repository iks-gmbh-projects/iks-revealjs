export function getFlattenedSlidenumber(reveal) {
    return reveal.getSlides().indexOf(reveal.getCurrentSlide()) + 1;
}

export function getTotalSlideNumbers(reveal) {
    return reveal.getSlides().length;
}