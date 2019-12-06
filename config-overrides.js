const fs = require('fs');
const { override } = require('customize-cra');

const rewireScss = () => config => {
  const color = fs.readFileSync('./preset/scss/color.scss').toString();
  const fn = fs.readFileSync('./preset/scss/fn.scss').toString();
  const oneOfRule = config.module.rules.find(rule => rule.oneOf !== undefined);
  oneOfRule.oneOf.forEach((rule)=>{
    if(String(rule.test).indexOf('scss|sass') > -1){
      rule.use.forEach((item)=>{
        if(item && item.loader && item.loader.indexOf('sass-loader') > -1){
          item.options.data = color + fn
        }
      })
    }
  })
  return config;
}

module.exports = override(
  rewireScss()
)
