import $ from 'jquery';
import forEach from 'lodash/fp/forEach';
export default () => forEach(x => window.alert($(x).html('<big>hello</big>')), $('div').toArray());