const has_value = obj => obj.value && obj.value.length > 0

const apply_filled_out = cntrl => has_value(cntrl)
                         ? cntrl.classList.add('filled-out')
                         : cntrl.classList.remove('filled-out')

const formCntrls = Array.from(document.getElementsByClassName("form-control"));

formCntrls.forEach( cntrl =>{
  apply_filled_out(cntrl)
  cntrl.addEventListener('focusout', () => apply_filled_out(cntrl))
})
