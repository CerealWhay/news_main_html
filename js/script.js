/* CONTROLLERS */
class MenuController {
    secondLvlMenus = document.querySelectorAll('.menu-wrapper-2lvl')

    constructor() {
        this.hideMenus2lvl()
        window.addEventListener('resize', this.hideMenus2lvl)
    }

    createCollapsed = (elementsWrapper) => {
        let collapsed = document.createElement('div');
        collapsed.classList.add('menu-item', 'menu-item--2lvl', 'collapsed')
        elementsWrapper.append(collapsed)

        let collapsedLink = document.createElement('a');
        collapsedLink.classList.add('menu-item__link')
        let collapsedLinkText = document.createTextNode('Еще');
        collapsedLink.append(collapsedLinkText)
        collapsed.append(collapsedLink)

        let collapsedWrapper = document.createElement('div');
        collapsedWrapper.classList.add('collapsed-wrapper')
        collapsed.append(collapsedWrapper)

        return {
            collapsed: collapsed,
            collapsedWrapper: collapsedWrapper,
        }
    }
    hideDropdownItems = (elementsWrapper) => {
        if (elementsWrapper.scrollWidth > elementsWrapper.clientWidth) {
            const {collapsedWrapper} = this.createCollapsed(elementsWrapper)
            while (elementsWrapper.scrollWidth > elementsWrapper.clientWidth) {
                const ch = elementsWrapper.removeChild(
                    elementsWrapper.children[elementsWrapper.childElementCount - 2]
                )
                let elem = ch.firstElementChild
                elem.classList.add('collapsed-item')
                collapsedWrapper.prepend(elem)
            }
        }
    }
    hideMenus2lvl = () => {
        this.secondLvlMenus.forEach(e => this.hideDropdownItems(e))
    }
}

class NoticeController {
    notices = document.querySelectorAll('.news-notice')

    constructor() {
        this.notices.forEach(notice => this.addEL(notice))
    }

    addEL = (notice) => {
        notice.addEventListener('click', (e) => {
                e.currentTarget.classList.toggle('open')
            }
        )
    }
}

class SearchController {

    search = document.querySelector('#search')
    searchBtn = document.querySelector('#main-search__icon')

    constructor() {
        this.search.addEventListener(
            'click',
            (e) => e.stopPropagation()
        )
        this.searchBtn.addEventListener(
            'click',
            (e) => {
                this.search.classList.toggle('active')
            }
        )
        addEventListener('click', () => this.search.classList.remove('active'))
    }

}

class ReactionsController {
    reactionNodes = document.querySelectorAll('.reactions')
    reactions = []

    constructor() {
        this.reactionNodes.forEach((reaction) => {
            const reactionsMainIcon = reaction.querySelector('.reactions__main-icon');
            const reactionsMainCount = reaction.querySelector('.reactions__main-count');
            const reactionsSelectorBlock = reaction.querySelector('.reactions__selector-block');
            const reactionsMarkedBlock = reaction.querySelector('.reactions__marked-block');
            this.reactions.push(
                new ReactionController(
                    reaction,
                    reactionsMainIcon,
                    reactionsMainCount,
                    reactionsSelectorBlock,
                    reactionsMarkedBlock,
                )
            )
        })
    }

}

class ReactionController {
    constructor(
        reactions,
        reactionsMainIcon,
        reactionsMainCount,
        reactionsSelectorBlock,
        reactionsMarkedBlock
    ) {
        this.reactions = reactions
        this.reactionsMainIcon = reactionsMainIcon
        this.reactionsMainCount = reactionsMainCount
        this.reactionsSelectorBlock = reactionsSelectorBlock
        this.reactionsMarkedBlock = reactionsMarkedBlock

        this.addELIcon()
        this.addELCount()
    }

    addELIcon = () => {
        this.reactions.addEventListener(
            'mousemove',
            (e) => e.stopPropagation()
        )
        this.reactionsMainIcon.addEventListener('mouseover', (e) => {
                this.reactionsSelectorBlock.classList.add('active')
            }
        )
        addEventListener('mousemove', (e) => {
            console.log('d');
                this.reactionsSelectorBlock.classList.remove('active')
            }
        )
    }

    addELCount = () => {
        this.reactionsMainCount.addEventListener('click', (e) => {
                console.log(this.reactionsMarkedBlock)
            }
        )
    }

}

/* MOUNTED */
new MenuController()
new NoticeController()
new SearchController()
// new ReactionsController()