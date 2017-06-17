<template>
    <div>
    <router-link to="/" class="btn btn-lg btn-primary">Back</router-link>
        <section id="component-input">
            <h1 class="display-1">Buttons</h1>
            <p class="lead">Use Bootstrap’s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.</p>

            <hr>
            
            <h3 class="display-3">Styles</h3>
            <p class="lead">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>
            <div>
                <label class="btn btn-primary active">
                    <input type="radio" name="options" value="btn-primary" autocomplete="off" v-model="btnStyle"> Primary
                </label>
                <label class="btn btn-secondary">
                    <input type="radio" name="options" value="btn-secondary" autocomplete="off" v-model="btnStyle"> Secondary
                </label>
                <label class="btn btn-success">
                    <input type="radio" name="options" value="btn-success" autocomplete="off" v-model="btnStyle"> Success
                </label>
                <label class="btn btn-info">
                    <input type="radio" name="options" value="btn-info" autocomplete="off" v-model="btnStyle"> Info
                </label>
                <label class="btn btn-warning">
                    <input type="radio" name="options" value="btn-warning" autocomplete="off" v-model="btnStyle"> Warning
                </label>
                <label class="btn btn-danger">
                    <input type="radio" name="options" value="btn-danger" autocomplete="off" v-model="btnStyle"> Danger
                </label>
                <label class="btn btn-link">
                    <input type="radio" name="options" value="btn-link" autocomplete="off" v-model="btnStyle"> Link
                </label>
            </div>

            <hr>

            <h3 class="display-3">Outline buttons</h3>
            <p class="lead">In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the <kbd>.btn-outline-*</kbd> ones to remove all background images and colors on any button.</p>
            <div>
                <button type="button" class="btn btn-outline-primary">Primary</button>
                <button type="button" class="btn btn-outline-secondary">Secondary</button>
                <button type="button" class="btn btn-outline-success">Success</button>
                <button type="button" class="btn btn-outline-info">Info</button>
                <button type="button" class="btn btn-outline-warning">Warning</button>
                <button type="button" class="btn btn-outline-danger">Danger</button>
            </div><br>
            <div class="input-group">
                <input type="checkbox" class="form-control" v-model="isOutline">
            </div>

            <hr>

            <h3 class="display-3">Sizes</h3>
            <p class="lead">Fancy larger or smaller buttons? Add <kbd>.btn-lg</kbd> or <kbd>.btn-sm</kbd> for additional sizes.</p>
            <div>
                <button type="button" class="btn btn-lg" :class="btnStyle" @click="btnSize = 'btn-lg'">Large button</button>
                <button type="button" class="btn" :class="btnStyle" @click="btnSize = ''">Normal button</button>
                <button type="button" class="btn btn-sm" :class="btnStyle" @click="btnSize = 'btn-sm'">Small button</button>
            </div>
            <br>
            <p class="lead">Create block level buttons—those that span the full width of a parent—by adding <kbd>.btn-block</kbd>.</p>
            <div>
                <button type="button" class="btn btn-lg btn-block" :class="btnStyle" @click="btnBlock = (btnBlock == 'btn-block') ? '' : 'btn-block'">Block level button</button>
            </div>
            <hr>

            <h3 class="display-3">Active state</h3>
            <p class="lead" >Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. There’s no need to add a class to <kbd>buttons</kbd> as they use a pseudo-class. However, you can still force the same active appearance with .active (and include the <kbd>aria-pressed="true"</kbd> attribute) should you need to replicate the state programmatically.</p>
            <div>
                <button class="btn btn-lg active " :class="btnStyle" role="button" @click="btnActive = (btnActive == 'active') ? '' : 'active'">Active state</button>
            </div>

            <hr>

            <h3 class="display-3">Disabled state</h3>
            <p class="lead">Make buttons look inactive by adding the disabled boolean attribute to any <kbd>button</kbd> element.</p>
            <div>
                <button type="button" class="btn btn-lg " :class="btnStyle" disabled>Disabled</button>
                <input type="checkbox" @click="isDisable = !isDisable">
            </div>
            <hr>
        </section>

        <section id="resultLink">
            <h3 class="display-3 text-center">Result</h3>
            <button class="btn " :class="getClass" :disabled="isDisable">Button</button>
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
  name: 'button',
  data () {
    return {
      isOutline: false,
      btnStyle: 'btn-primary',
      btnSize: '',
      btnBlock: '',
      btnActive: '',
      isDisable: false
    }
  },
  computed: {
    getCode: function () {
      let code
      let disable = (this.isDisable) ? ' disabled' : ''
      code = `<button class="btn ${this.getClass}"${disable}>Button</button>`
      return code
    },
    getClass: function () {
      let btnClass
      let btnStyle = this.btnStyle.split('-')[1]
      btnClass = (this.isOutline) ? `btn-outline-${btnStyle}` : this.btnStyle
      btnClass += ` ${this.btnSize} ${this.btnBlock} ${this.btnActive}`
      return btnClass
    }
  },
  methods: {
  }
}
</script>
