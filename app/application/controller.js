import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

export default Controller.extend({
  rootElement: computed(function() {
    return document.querySelector(getOwner(this).rootElement);
  }).readOnly(),

  actions: {
    toggleNavigation() {
      this.get('rootElement.classList').toggle('open-navigation');
    }
  }
});
