const sectionSixBtn = document.querySelector('.section_six-list-btn')
const sectionSixRightTitle4 = document.querySelector('.section_six-right-title-4')
const sectionSixRightTitle3 = document.querySelector('.section_six-right-title-3')
const sectionSixItem2 = document.querySelector('.section_six-item-2')
const sectionSixItem = document.querySelectorAll('.section_six-item')
// const section_six-right-title-3-none = document.querySelector('.section_six-right-title-3-none')

sectionSixBtn.addEventListener('click', () => {
    sectionSixRightTitle3.classList.toggle('section_six-right-title-3-none')
    sectionSixRightTitle4.classList.toggle('section_six-right-title-3-none')
    sectionSixItem2.classList.toggle('section_six-right-title-3-none')
    sectionSixItem.forEach(item => {
        item.classList.toggle('section_six-right-title-3-none')
    })
})