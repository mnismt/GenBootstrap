<template>
  <div>
    <section id="component-input">
      <h1 class="display-1">Dropdowns</h1>
      <p class="lead">Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is an intentional design decision.</p>

      <hr>

      <h3 class="display-3">Styles</h3>
      <p class="lead">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>
      <p class="lead">Click into the button to choose them.</p>
      <div>
        <button type="button" class="btn btn-primary" @click="dropStyle = 'btn-primary'">Primary</button>
        <button type="button" class="btn btn-secondary" @click="dropStyle = 'btn-secondary'">Secondary</button>
        <button type="button" class="btn btn-success" @click="dropStyle = 'btn-success'">Success</button>
        <button type="button" class="btn btn-info" @click="dropStyle = 'btn-info'">Info</button>
        <button type="button" class="btn btn-warning" @click="dropStyle = 'btn-warning'">Warning</button>
        <button type="button" class="btn btn-danger" @click="dropStyle = 'btn-danger'">Danger</button>
      </div>

      <hr>
      
      <h3 class="display-3">Sizing</h3>
      <p class="lead">Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</p>
      <div>
        <div class="btn-group">
          <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Large button
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
          </div>
        </div>
        <div class="btn-group">
          <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Large button
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
          </div>
        </div>
      </div>
    </section>
    <section id="resultLink">
      <h3 class="display-3 text-center">Result</h3>
      <div class="row">
        <div class="dropdown offset-5">
          <button class="btn dropdown-toggle" :class="dropStyle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
          </div>
        </div>
      </div>
      <h3 class="display-3 text-center">Code</h3>
      <div class="result-code">
      <kbd><kbd>
        {{ getCode }}
      </kbd></kbd>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'dropdowns',
  data () {
    return {
      dropStyle: 'btn-primary'
    }
  },
  computed: {
    getCode: function () {
      return 'a'
    }
  }
}
</script>
