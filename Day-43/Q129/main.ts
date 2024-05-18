const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function(this: { value: string }) {
      console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: function(this: { value: string }) {
      console.log("Arrow function:", this.value); // 'this' refers to traditionalVsArrow object
    },
  };
  
  traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
  traditionalVsArrow.arrowFunction(); // Logs "traditionalVsArrow value"
