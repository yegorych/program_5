"use strict";

function deleteNth(arr,n){
    for (let i = 0; i < arr.length; i++){
      let count = 1;
      for (let j = i+1; j < arr.length; j++){
        if (arr[i] == arr[j]){
          count++;
          if( count > n){
            arr.splice(j,1);
            j--;
            count--;
          }
        }
      }
    }
    return arr;
  }