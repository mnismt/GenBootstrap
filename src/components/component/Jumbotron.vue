<template>
    <div>
    <router-link to="/" class="btn btn-lg btn-primary">Back</router-link>
      <section id="component-input">
        <h1 class="display-1">Jumbotron</h1>
				<p class="lead">A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.</p>

        <hr>

        <div id="pick-style">
          <h3 class="display-3">Style</h3>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="jumbotron">
                  <h1 class="display-3">Default style</h1>
                  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr class="my-4">
                  <p class="lead">
                    <button class="btn btn-primary btn-lg" @click="jumboStyle = ''">Pick</button>
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="jumbotron jumbotron-fluid">
                  <div class="container">
                    <h1 class="display-3">Fluid jumbotron</h1>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    <hr class="my-4">
                    <p class="lead">
                      <button class="btn btn-primary btn-lg" @click="jumboStyle = 'jumbotron-fluid'">Pick</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <hr>

        <div id="input">
          <h3 class="display-3">Input</h3>
          <div class="form-group row">
              <label for="jumboHead" class="col-sm-2 col-form-label col-form-label-lg">Heading</label>
              <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="jumboHead" placeholder="Write here" maxlength="25" v-model="jumboHead">
              </div>
          </div>
          <div class="form-group row">
              <label for="jumboContent" class="col-sm-2 col-form-label col-form-label-lg">Content</label>
              <div class="col-sm-10">
                  <textarea class="form-control form-control-lg" id="jumboContent" placeholder="Write here" v-model="jumboContent"></textarea>
              </div>
          </div>
        </div>
      </section>

      <hr>

      <section id="component-result">
        <h3 class="display-3 text-center">Result</h3>

        <div class="jumbotron" :class="jumboStyle">
          <h1 :class="getSizeHead">{{ jumboHead }}</h1>
          <button class="btn btn-primary" @click="changeSizeHead('+')">-</button>
          <button class="btn btn-primary" @click="changeSizeHead('-')">+</button>
          <p class="lead"> {{ jumboContent }} </p>
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
  name: 'jumbotron',
  data () {
    return {
      jumboStyle: '',
      jumboHead: 'Hello, world!',
      jumboContent: 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
      sizeHead: 1
    }
  },
  computed: {
    getCode: function () {
      let code
      code = `<div class="jumbotron ${this.jumboStyle}"><h1 class="${this.getSizeHead}">${this.jumboHead}</h1><p class="lead">${this.jumboContent}</p></div>`
      return code
    },
    getSizeHead: function () {
      return `display-${this.sizeHead}`
    }
  },
  methods: {
    changeSizeHead: function (cal) {
      (cal === '+') ? this.sizeHead++ : this.sizeHead--
      if (this.sizeHead < 1) {
        this.sizeHead = 1
      } if (this.sizeHead > 4) {
        this.sizeHead = 4
      }
    }
  }
}
</script>
