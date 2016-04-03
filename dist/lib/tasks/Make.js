'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BabelHelper = require('../BabelHelper');

var _BabelHelper2 = _interopRequireDefault(_BabelHelper);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _Project = require('../Project');

var _Project2 = _interopRequireDefault(_Project);

var _ShellHelper = require('../ShellHelper');

var _ShellHelper2 = _interopRequireDefault(_ShellHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// include node_modules/.bin in path, just like 'npm run' scripts
process.env.PATH = _path2.default.join(_path2.default.resolve(_path2.default.join(__dirname, '../../../node_modules', '.bin')) + _path2.default.delimiter + process.env.PATH);

var spawnopts = {
  env: process.env,
  stdio: 'inherit'
};

var Make = function () {
  function Make() {
    _classCallCheck(this, Make);
  }

  _createClass(Make, [{
    key: 'init',
    value: function init() {
      this.project = new _Project2.default();
      this.project.checkValidProject();
    }
  }, {
    key: 'clean',
    value: function clean() {
      _ShellHelper2.default.rm('-rf', './dist');
    }
  }, {
    key: 'dist',
    value: function dist() {
      _ShellHelper2.default.copyDir('src', 'dist', {
        recurse: true
      }, function (f) {
        return _path2.default.extname(f) != '.js';
      });
    }
  }, {
    key: 'babel',
    value: function babel() {
      _BabelHelper2.default.transform('src', 'dist');
      /*
      if (!options.local) {
        spawnSync('docker-compose', ['build'], spawnopts);
      }
      */
    }
  }, {
    key: 'image',
    value: function image() {}
  }, {
    key: 'build',
    value: function build() {}
  }]);

  return Make;
}();

exports.default = Make;
//# sourceMappingURL=Make.js.map