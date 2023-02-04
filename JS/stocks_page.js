window.addEventListener("mousemove", (e) => {
    var rect = document.querySelector(".blur").getBoundingClientRect();
    var x = e.clientX - rect.left - 50;
    var y = e.clientY - rect.top - 60;
    document.querySelector(".blur").style.backgroundPosition = `${x}px ${y}px`;
  
    var rect1 = document.querySelector(".dark .blur").getBoundingClientRect();
    var x1 = e.clientX - rect1.left - 50;
    var y1 = e.clientY - rect1.top - 60;
    document.querySelector(
      ".dark .blur"
    ).style.backgroundPosition = `${x1}px ${y1}px`;
  });
  
  document.querySelector(".blur").addEventListener("mousemove", (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left-50;
    var y = e.clientY - rect.top-60;
    document.querySelector(".blur").style.backgroundPosition = `${x}px ${y}px`;
    document.querySelector(
      ".card"
    ).style.boxShadow = `rgba(99, 99, 99, 0.3) 0px 2px 10px 0px`;
    document.querySelector(
      `.card`
    ).style.transition = `all 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)`;
    document.querySelector(".blur").style.backgroundSize = `100px 120px`;
    document.querySelector(
      `.blur`
    ).style.transition = `background 0.9s cubic-bezier(2, 0.2, 0.5, 2)`;
    document.querySelector(".blur").style.backgroundRepeat = `no-repeat`;
    document.querySelector(
      "figure"
    ).style.transition = `border 0.5s cubic-bezier(9, 0.2, 0.25, 2)`;
    if (x < 150 && y < 40) {
      document.querySelector(
        `.flex-b:nth-of-type(2n) .skew:nth-of-type(2n)`
      ).style.background = `#E7EEEC`;
  
      document.querySelector(
        `.flex-b:nth-of-type(2n) .skew:nth-of-type(2n)`
      ).style.border = "1px solid #E9F3EC";
    } else if (x > 160 && y < 90) {
      document.querySelector(
        `.flex-b:nth-of-type(4n) .skew:nth-of-type(2n)`
      ).style.background = `#E9F3EC`;
    } else {
      document.querySelector(
        `.flex-b:nth-of-type(2n) .skew:nth-of-type(2n)`
      ).style.background = `#F8F7F8`;
      document.querySelector(
        `.flex-b:nth-of-type(4n) .skew:nth-of-type(2n)`
      ).style.background = `#F8F7F8`;
  
      document.querySelector(
        `.flex-b:nth-of-type(2n) .skew:nth-of-type(2n)`
      ).style.border = "1px solid#FAF9FA";
    }
    if (x < 150) {
      if (y > 90) {
        document.querySelector(
          `.blur`
        ).style.backgroundImage = `radial-gradient(#619C7A, #4A8B44)`;
  
        document.querySelector("figure").style.border = `1px solid #d3d1d3`;
      } else {
        document.querySelector(
          `.blur`
        ).style.backgroundImage = `radial-gradient(#619C7A, #76AF8E)`;
        document.querySelector("figure").style.border = `1px solid #99C295`;
      }
    } else {
      document.querySelector("figure").style.border = `1px solid #d3d1d3`;
      if (y > 50) {
        document.querySelector(
          `.blur`
        ).style.backgroundImage = `radial-gradient(#DAEDE3, #B9EC2A)`;
      } else
        document.querySelector(
          `.blur`
        ).style.backgroundImage = `radial-gradient(#DAEDE3, #67EC2A)`;
    }
    document.querySelector("figure").style.background = `white`;
  });
  
  document.querySelector(".blur").addEventListener("mouseout", (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    document.querySelector(
      `.blur`
    ).style.transition = `background 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)`;
    document.querySelector(".blur").style.backgroundPosition = `${x}px ${y}px`;
  
    document.querySelector(".blur").style.background = `transparent`;
    document.querySelector("figure").style.background = `#f4f2f4`;
    document.querySelector(
      `.flex-b:nth-of-type(2n) .skew:nth-of-type(2n)`
    ).style.background = `#F8F7F8`;
    document.querySelector(
      `.flex-b:nth-of-type(4n) .skew:nth-of-type(2n)`
    ).style.background = `#F8F7F8`;
    document.querySelector("figure").style.border = `1px solid #d3d1d3`;
    document.querySelector(
      ".card"
    ).style.boxShadow = `rgba(99, 99, 99, 0.1) 0px 2px 8px 0px`;
  });
  
  document.querySelector(".dark .blur").addEventListener("mousemove", (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    // document.querySelector(
    //   ".dark .blur"
    // ).style.backgroundPosition = `${x}px ${y}px`;
    document.querySelector(
      ".dark.card"
    ).style.boxShadow = `#8EB065 0px 2px 10px 0px`;
    document.querySelector(
      `.dark.card`
    ).style.transition = `all 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)`;
    document.querySelector(".dark .blur").style.backgroundSize = `100px 120px`;
    document.querySelector(
      `.dark .blur`
    ).style.transition = `background 0.9s cubic-bezier(2, 0.2, 0.5, 2)`;
    document.querySelector(".dark .blur").style.backgroundRepeat = `no-repeat`;
    document.querySelector(".dark figure").style.transition = `f
    0.5s cubic-bezier(9, 0.2, 0.25, 2)`;
    if (x < 150 && y < 40) {
      document.querySelector(
        `.dark .flex-b:nth-of-type(2n) .skew:nth-of-type(2n)`
      ).style.background = `#1F2923`;
    } else if (x > 160 && y < 90) {
      document.querySelector(
        `.dark .flex-b:nth-of-type(4n) .skew:nth-of-type(2n)`
      ).style.background = `#1F2923`;
    } else {
      document.querySelector(
        `.dark .flex-b:nth-of-type(2n) .skew:nth-of-type(2n)`
      ).style.background = `#212124`;
      document.querySelector(
        `.dark .flex-b:nth-of-type(4n) .skew:nth-of-type(2n)`
      ).style.background = `#212124`;
    }
    if (x < 150) {
      if (y > 90) {
        document.querySelector(
          `.dark .blur`
        ).style.backgroundImage = `radial-gradient(#619C7A, #4A8B44)`;
  
        document.querySelector(".dark figure").style.border = `1px solid #64BC87`;
        document.querySelector(".dark svg").style.stroke = `#64BC87`;
      } else {
        document.querySelector(
          `.dark .blur`
        ).style.backgroundImage = `radial-gradient(#619C7A, #76AF8E)`;
  
        document.querySelector(".dark figure").style.border = `1px solid #64BC87`;
        document.querySelector(".dark svg").style.stroke = `#64BC87`;
      }
    } else {
      document.querySelector(".dark figure").style.border = `1px solid #636368`;
      document.querySelector(".dark svg").style.stroke = `#d3d1d3`;
      if (y > 50) {
        document.querySelector(
          `.dark .blur`
        ).style.backgroundImage = `radial-gradient(#DAEDE3, #B9EC2A)`;
      } else
        document.querySelector(
          `.dark .blur`
        ).style.backgroundImage = `radial-gradient(#DAEDE3, #67EC2A)`;
    }
    document.querySelector(".dark figure").style.background = `#2F2F33`;
  });
  
  document.querySelector(".dark .blur").addEventListener("mouseout", (e) => {
    document.querySelector(".dark .blur").style.background = `transparent`;
    document.querySelector(".dark figure").style.background = `#2F2F33`;
    document.querySelector(
      `.dark .flex-b:nth-of-type(2n) .skew:nth-of-type(2n)`
    ).style.background = `#212124`;
    document.querySelector(
      `.dark .flex-b:nth-of-type(4n) .skew:nth-of-type(2n)`
    ).style.background = `#212124`;
    document.querySelector(".dark figure").style.border = `1px solid #636368`;
  
    document.querySelector(
      ".dark.card"
    ).style.boxShadow = `#929995 0px 2px 8px 0px`;
    document.querySelector(".dark svg").style.stroke = `#B1B1B6`;
  });
  
  
