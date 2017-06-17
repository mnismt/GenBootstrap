<template>
	<div>
  <router-link to="/" class="btn btn-lg btn-primary">Back</router-link>
		<section id="component-input">
				<h1 class="display-1">Collapse</h1>
				<p class="lead">The Bootstrap collapse plugin allows you to toggle content on your pages with a few classes thanks to some helpful JavaScript.</p>

				<hr>

        <div class="input-tutorial">
          <h3 class="display-3 text-center">Button</h3>
          <p class="lead">Click the buttons below to show and hide another element via class changes:</p>
          <li class="lead"><kbd>.collapse</kbd> hides content</li>
          <li class="lead"><kbd>.collapsing</kbd> hides content</li>
          <li class="lead"><kbd>.collapse.show</kbd> hides content</li>
          <p class="lead">You can use a link with the <kbd>href</kbd> attribute, or a button with the <kbd>data-target</kbd> attribute. In both cases, the <kbd>data-toggle="collapse"</kbd> is required.</p>
        </div>

        <hr>
        <div class="data-input">
          <div class="form-group row">
              <label for="content" class="col-sm-2 col-form-label col-form-label-lg">Content</label>
              <div class="col-sm-10">
                  <textarea class="form-control form-control-lg" id="content" placeholder="Write here" v-model="content"></textarea>
              </div>
          </div>
          <div class="form-group row">
              <label for="btnLabel" class="col-sm-2 col-form-label col-form-label-lg">Label</label>
              <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="btnLabel" placeholder="Write here" v-model="btnLabel">
              </div>
          </div>
        </div>
        
        <a class="btn btn-primary" href="#href">
          Link with href
        </a>
        <input type="radio" name="type" checked @click="type = 'href'">
        <button class="btn btn-primary" type="button">
          Button with data-target
        </button>
        <input type="radio" name="type" @click="type = 'button'">
        <hr>
        <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          {{ btnLabel }}
        </a><br>
        <div class="collapse" id="collapseExample">
          <div class="card card-block">
            {{ content }}
          </div>
        </div>
		</section>
    <hr>
		<section id="component-result">
      <h3 class="display-3 text-center">Code</h3>
      <div class="result-code">
        <kbd><kbd>
            {{ getCode }}
        </kbd></kbd>
      </div>
		</section>

    <hr>
	</div>
</template>

<script>
export default {
  name: 'collapse',
  data () {
    return {
      content: '',
      btnLabel: 'Button',
      type: 'href'
    }
  },
  computed: {
    getCode: function () {
      let code
      if (this.type === 'href') {
        code = `<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">${this.btnLabel}</a>`
      } else {
        code = `<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">${this.btnLabel}</button>`
      }
      code += `<div class="collapse" id="collapseExample"><div class="card card-block">${this.content}</div></div>`
      return code
    }
  }
}
</script>
