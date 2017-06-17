<template>
    <div>
    <router-link to="/" class="btn btn-lg btn-primary">Back</router-link>
        <section id="component-input">
            <h1 class="display-1">Breadcrumb</h1>
            <p class="lead">Indicate the current page’s location within a navigational hierarchy. Separators are automatically added in CSS through <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">::before</a> and content.</p>
            <hr>
            
            <h3 class="display-3">Input</h3>
            <form @submit.prevent="addContent">
                <div class="form-group row">
                    <label for="content" class="col-sm-2 col-form-label col-form-label-lg">Breadcrumb content</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control form-control-lg" id="content" placeholder="Content" v-model="content">
                    </div>
                    <div class="col-sm-1">
                        <button type="submit" class="btn btn-lg btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </section>
        <hr>
        <section id="resultLink">
            <h3 class="display-3 text-center">Result</h3>
            <div class="row">
                <ol class="breadcrumb col-lg-11">
                    <form @submit.prevent="onSubmit" v-if="isChange">
                        <div class="input-group" v-for="breadcrumb in breadcrumbsContent">
                            <input type="text" class="form-control" ref="breadcrumb" :value="breadcrumb">
                        </div>
                        <button type="submit" class="btn btn-lg btn-primary">Submit</button>
                    </form>
                    <li v-for="breadcrumb in breadcrumbsContent" class="breadcrumb-item" v-else>{{ breadcrumb }}</li>
                </ol>
                <div class="col-lg-1">
                    <button class="btn btn-lg btn-primary" v-if="!isChange" @click="change">Change</button>
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
  name: 'breadcrumb',
  data () {
    return {
      content: '',
      isChange: false,
      breadcrumbs: [],
      breadcrumbsContent: []
    }
  },
  computed: {
    getCode: function () {
      let code
      let breadcrumb = ''
      for (let i = 0; i < this.breadcrumbsContent.length; i++) {
        breadcrumb += `<li class="breadcrumb-item">${this.breadcrumbsContent[i]}</li>`
      }
      code = `<ol class="breadcrumb">${breadcrumb}</ol>`
      return code
    }
  },
  methods: {
    addContent: function () {
      this.breadcrumbsContent.push(this.content)
      this.content = ''
    },
    change: function () {
      this.isChange = !this.isChange
    },
    onSubmit: function () {
      let br
      this.breadcrumbsContent = []
      for (br in this.$refs.breadcrumb) {
        // this.breadcrumbsContent[br] = this.$refs.breadcrumb[br].value
        this.breadcrumbsContent.push(this.$refs.breadcrumb[br].value)
      }
      this.getCode
      this.isChange = !this.isChange
    }
  }
}
</script>
