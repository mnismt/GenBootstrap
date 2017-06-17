<template>
    <div>
    <router-link to="/" class="btn btn-lg btn-primary">Back</router-link>
        <section id="input-badges">
            <h1 class="display-1">Badges</h1>
            <p class="lead">Small and adaptive tag for adding context to just about any content.</p>
            <hr>
            <div class="component-class">
                <h3 class="display-3 text-center">Contextual variations</h3>
                <p class="lead text-center">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                <br>
                <div class="row">
                    <div class="input-group col-4">
                        <input type="radio" name="badge-contextual" value="badge-default" v-model="badgeContext">
                        <span class="badge badge-default">Default</span>
                    </div>
                    <div class="input-group col-4">
                        <input type="radio" name="badge-contextual" value="badge-primary" v-model="badgeContext">
                        <span class="badge badge-primary">Primary</span>
                    </div>
                    <div class="input-group col-4">
                        <input type="radio" name="badge-contextual" value="badge-success" v-model="badgeContext">
                        <span class="badge badge-success">Success</span>
                    </div>
                    <div class="input-group col-4">
                        <input type="radio" name="badge-contextual" value="badge-info" v-model="badgeContext">
                        <span class="badge badge-info">Info</span>
                    </div>
                    <div class="input-group col-4">
                        <input type="radio" name="badge-contextual" value="badge-warning" v-model="badgeContext">
                        <span class="badge badge-warning">Warning</span>
                    </div>
                    <div class="input-group col-4">
                        <input type="radio" name="badge-contextual" value="badge-danger" v-model="badgeContext">
                        <span class="badge badge-danger">Danger</span>
                    </div>
                </div>
                <hr>
                <h3 class="display-3 text-center">Pill badges</h3>
                <p class="lead text-center">Use the .badge-pill modifier class to make badges more rounded (with a larger border-radius and additional horizontal padding). Useful if you miss the badges from v3.</p>
                <div class="row">
                    <div class="offset-4">
                        <span class="badge badge-pill badge-default">Default</span>
                        <span class="badge badge-pill badge-primary">Primary</span>
                        <span class="badge badge-pill badge-success">Success</span>
                        <span class="badge badge-pill badge-info">Info</span>
                        <span class="badge badge-pill badge-warning">Warning</span>
                        <span class="badge badge-pill badge-danger">Danger</span>
                        <div class="input-group input-group-lg offset-6">
                            <input type="checkbox" value="badge-pill" v-model="badgePill">
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="component-input">
                <h3 class="display-3 text-center">Input</h3>
                <br>
                <div class="form-group row">
                    <label for="badgeContent" class="col-sm-2 col-form-label col-form-label-lg">Content</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control form-control-lg" id="badgeContent" placeholder="Content" v-model="badgeContent">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="badgeBadges" class="col-sm-2 col-form-label col-form-label-lg">Badges</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control form-control-lg" id="badgeBadges" placeholder="Badge" v-model="badgeBadges">
                    </div>
                </div>
            </div>
        </section>
        <hr>
        <section id="resultLink">
            <h3 class="display-3 text-center">Result</h3><br>

            <h1>{{ badgeContent }} <span class="badge " :class="cls">{{badgeBadges}}</span></h1>
            
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
  name: 'badges',
  data () {
    return {
      badgeContext: 'badge-default',
      badgePill: false,
      badgeContent: '',
      badgeBadges: ''
    }
  },
  computed: {
    getCode: function () {
      let code
      code = `<h1>${this.badgeContent} <span class="badge ${this.badgeContext} ${this.pill}">${this.badgeBadges}</span></h1>`
      return code
    },
    pill: function () {
      return (this.badgePill) ? 'badge-pill' : ''
    },
    cls: function () {
      return `${this.badgeContext} ${this.pill}`
    }
  }
}
</script>
