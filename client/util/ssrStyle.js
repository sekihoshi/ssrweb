import React from 'react'

export default (style) => {
   if(typeof window != 'undefined') {
       return;
   }
   return (
       <style>{style}</style>
   )
}