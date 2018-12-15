const Utils = {
  toggleClass: (el, className) => {
    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);
      
      if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
      else
      classes.push(className);
      
      el.className = classes.join(' ');
    }
    
    return Utils.hasClass(el, className)
  }, 
  
  hasClass: (el, className) => {
    if (el.classList)
    return (el.classList.contains(className));
    else
    return (new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className))
  }
}

export default Utils;