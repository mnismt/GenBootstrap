<template>
    <div>
    <router-link to="/" class="btn btn-lg btn-primary">Back</router-link>
    <section id="component-input">
        <h1 class="display-1">Progress</h1>
				<p class="lead">Use our custom progress component for displaying simple or complex progress bars. We don’t use the HTML5 progress element, ensuring you can stack progress bars, animate them, and place text labels over them.</p>

        <hr>

        <div id="component-style">
          <h3 class="display-3">Backgrounds</h3>
          <p class="lead">Use background utility classes to change the appearance of individual progress bars.</p>
          <button type="button" class="btn btn-primary" @click="background = ''">Primary</button>
          <button type="button" class="btn btn-success" @click="background = 'bg-success'">Success</button>
          <button type="button" class="btn btn-info" @click="background = 'bg-info'">Info</button>
          <button type="button" class="btn btn-warning" @click="background = 'bg-warning'">Warning</button>
          <button type="button" class="btn btn-danger" @click="background = 'bg-danger'">Danger</button>
        </div>

        <hr>

        <div id="component-striped">
          <h3 class="display-3">Striped</h3>
          <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <input type="checkbox" v-model="isStriped">
          <br>
          <h3 class="display-3">Animated stripes</h3>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <input type="checkbox" v-model="isAnimation">
        </div>

        <hr>

        <div id="component-input">
          <h3 class="display-3">Input</h3>
          <div class="form-group row">
              <label for="width" class="col-sm-2 col-form-label col-form-label-lg">% Width</label>
              <div class="col-sm-2">
                <input type="number" class="form-control form-control-lg" id="width" placeholder="" v-model="width">
              </div>
              <label for="height" class="col-sm-2 col-form-label col-form-label-lg">Height (px)</label>
              <div class="col-sm-2">
                <input type="text" class="form-control form-control-lg" id="height" placeholder="Write here" v-model="height">
              </div>
              <label for="label" class="col-sm-2 col-form-label col-form-label-lg">Label</label>
              <div class="col-sm-2">
                <input type="text" class="form-control form-control-lg" id="label" placeholder="Write here" v-model="label">
              </div>
          </div>
        </div>

        <hr>

    </section>

    <section id="component-result">
        <h3 class="display-3 text-center">Result</h3>

        <div class="progress">
          <div class="progress-bar" :class="getClass" role="progressbar" :style="getStyle" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"> {{label}} </div>
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
  name: 'progress',
  data () {
    return {
      background: '',
      isStriped: false,
      isAnimation: false,
      width: 50,
      height: '',
      label: '50%'
    }
  },
  computed: {
    getCode: function () {
      let code
      code = `<div class="progress"><div class="progress-bar ${this.getClass}" role="progressbar" style="${this.getStyle}" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"> ${this.label} </div></div>`
      return code
    },
    getClass: function () {
      let striped, animation
      if (this.isAnimation) {
        this.isStriped = true
        animation = 'progress-bar-animated'
      } else {
        animation = ''
      }
      striped = (this.isStriped) ? 'progress-bar-striped' : ''
      return `${this.background} ${striped} ${animation}`
    },
    getWidth: function () {
      if (this.width < 0 || this.width === '') {
        this.width = 0
      } else if (this.width > 100) {
        this.width = 100
      }
      return `width: ${this.width}%;`
    },
    getHeight: function () {
      console.log(this.height)
      if (this.height !== '') {
        return `height: ${this.height}px`
      } else {
        return ''
      }
    },
    getStyle: function () {
      return `${this.getWidth} ${this.getHeight}`
    }
  }
}
</script>
