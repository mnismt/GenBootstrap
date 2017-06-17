<template>
  <div>
    <router-link to="/" class="btn btn-lg btn-primary">Back</router-link>
    <section id="input-alert">
        <h1 class="display-1">Alert</h1>
        <p class="lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        <hr>
        <div class="alert-class">
            <h3 class="display-3 text-center">Class</h3>
            <br>
            <div class="row">
                <input type="radio" id="success" name="alert-class" class="col-lg-4" value="alert-success" v-model="alertClass">
                <div class="alert alert-success">Success</div>
                <input type="radio" id="info" name="alert-class" class="col-lg-4" value="alert-info" v-model="alertClass">
                <div class="alert alert-info">Info</div>
                <input type="radio" id="warning" name="alert-class" class="col-lg-4" value="alert-warning" v-model="alertClass">
                <div class="alert alert-warning">Warning</div>
                <input type="radio" id="danger" name="alert-class" class="col-lg-4" value="alert-danger" v-model="alertClass">
                <div class="alert alert-danger">Danger</div>
            </div>
        </div>
        <hr>
        <div class="alert-input">
            <h3 class="display-3 text-center">Input</h3>
            <br>
            <div class="form-group row">
                <label for="alertContent" class="col-sm-2 col-form-label col-form-label-lg">Content</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-lg" id="alertContent" placeholder="Content of alert" v-model="alertContent">
                </div>
            </div>
            <div class="form-group row">
                <label for="alertStrong" class="col-sm-2 col-form-label col-form-label-lg">Strong (Option)</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-lg" id="alertStrong" placeholder="Strong" v-model="alertStrong">
                </div>
            </div>
            <div class="form-group row">
                <label for="alertLink" class="col-sm-2 col-form-label col-form-label-lg">Link color (Option)</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control form-control-lg" id="alertLink" placeholder="Link" v-model="alertLink">
                    <input type="text" class="form-control form-control-lg" id="alertURL" placeholder="URL" v-model="alertURL">
                </div>
            </div>
        </div>
    </section>
    <hr>
    <section id="resultLink">
        <h3 class="display-3 text-center">Result</h3>
        <div class="alert " :class="alertClass" role="alert">
            <strong v-if="alertStrong">{{ alertStrong }}</strong>
            {{ alertContent }}
            <a v-if="alertLink" :href="alertURL" class="alert-link">{{ alertLink }}</a>
        </div>
        <hr>
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
  name: 'alert',
  data () {
    return {
      alertContent: 'You successfully read',
      alertClass: 'alert-success',
      alertStrong: 'Well done!',
      alertLink: 'this important alert message.',
      alertURL: '#',
      alertCode: ''
    }
  },
  computed: {
    getCode: function () {
      let strong, link, code
      strong = (this.alertStrong) ? `<strong>${this.alertStrong}</strong>` : ''
      link = (this.alertLink) ? `<a href="${this.alertURL}" class="alert-link">${this.alertLink}</a>` : ''
      code = `<div class="alert ${this.alertClass}" role="alert">${strong}${this.alertContent}${link}</div>`
      return code
    }
  }
}
</script>
