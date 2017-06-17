<template>
    <div class="row">
        <div class="card col-lg-3" v-for="component in listComponents">
            <div class="card-block">
                <h4 class="card-title">{{ component.name }}</h4>
                <p class="card-text">{{ (component.des.length < 80) ? component.des : component.des.substr(0, 60) + '...' }}</p>
                <router-link :to="component.name" class="btn btn-primary">Create</router-link>
            </div>
        </div>
    </div>
</template>

<script>
var listComponents = [{
  name: 'Alert',
  des: 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.'
}, {
  name: 'Badges',
  des: 'Small and adaptive tag for adding context to just about any content.'
}, {
  name: 'Breadcrumb',
  des: 'Indicate the current page’s location within a navigational hierarchy. Separators are automatically added in CSS through ::before and content.'
}, {
  name: 'Buttons',
  des: 'Use Bootstrap’s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.'
}, {
  name: 'Collapse',
  des: 'The Bootstrap collapse plugin allows you to toggle content on your pages with a few classes thanks to some helpful JavaScript.'
}, {
  name: 'Jumbotron',
  des: 'A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.'
}, {
  name: 'Progress',
  des: 'Use our custom progress component for displaying simple or complex progress bars. We don’t use the HTML5 <progress> element, ensuring you can stack progress bars, animate them, and place text labels over them.'
}, {
  name: 'Pagination',
  des: 'Pagination links indicate a series of related content exists across multiple pages. Typically these are used where a multi-page approach to long lists of content improves general performance, such as in search results or inboxes.'
}, {
  name: 'Cards',
  des: 'A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.'
}, {
  name: 'Carousel',
  des: 'The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.'
}, {
  name: 'Dropdowns',
  des: 'Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is an intentional design decision.'
}, {
  name: 'Forms',
  des: 'Bootstrap provides several form control styles, layout options, and custom components for creating a wide variety of forms.'
}, {
  name: 'Modal',
  des: 'Modals are streamlined, but flexible dialog prompts powered by JavaScript. They support a number of use cases from user notification to completely custom content and feature a handful of helpful subcomponents, sizes, and more.'
}, {
  name: 'Navs',
  des: 'Navigation available in Bootstrap share general markup and styles, from the base .nav class to the active and disabled states. Swap modifier classes to switch between each style.'
}, {
  name: 'Navbar',
  des: 'The navbar is a wrapper that positions branding, navigation, and other elements in a concise header. It’s easily extensible and, thanks to our Collapse plugin, can easily integrate responsive behaviors.'
}, {
  name: 'Popovers',
  des: 'Add small overlay content, like those found in iOS, to any element for housing secondary information.'
}]

export default {
  name: 'home',
  data () {
    return {
      listComponents: listComponents
    }
  }
}
</script>
