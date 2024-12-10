const sliders = {
  slider_vIn: new Dom(".slider_vIn"),
  slider_vGs: new Dom(".slider_vGs"),
  slider_R: new Dom(".slider_R"),

  slider_vIn_label: new Dom(".temp-title5"),
  slider_vGs_label: new Dom(".temp-title6"),
  slider_R_label: new Dom(".temp-title7"),

  //! we using temptitle10 as a record btn
  // show we can update the table according to the button click
  btn_record: new Dom(".temp-title10"),


  init(){
    this.updateLabels()
    let styles = {
      fontSize: "larger",
      padding: "0 5px",
      textAlign: "center",
      width: "fit-content",
      color: "black",
      border: "2px solid black",
      backgroundColor: "white",
    }
    this.slider_vIn_label.styles(styles)
    this.slider_vGs_label.styles(styles)
    this.slider_R_label.styles(styles)
  },
  
  // part: 1_1, 1_2, 2
  showSliderFor(part){
    switch(part){
      case "1_1":
        this.slider_vIn.set(10,-57,23).zIndex(10)
        this.slider_vIn_label.set(225,-56)

        this.slider_vGs.set(20,368,23).zIndex(10)
        this.slider_vGs_label.set(184,367)

        this.slider_R_label.set(440,349)
        
        // ! vGs onclick
        var differences_vGs = [140,117,85,54];
        var vals_vGs = [25,750,150,50]
        var vals_iG = [0,2,10,20]
        var currentDifferenceIndex_vGs = 0;
        // for the slider vgs
        var value_vGs = 0
        var value_iG = 0
        this.slider_vGs.item.onclick = ( )=>{
          if (currentDifferenceIndex_vGs < differences_vGs.length) {
            // Get the current difference
            var currentDifference = differences_vGs[currentDifferenceIndex_vGs];
            
            // setting the value of label
            value_vGs = vals_vGs[currentDifferenceIndex_vGs]
            value_iG = vals_iG[currentDifferenceIndex_vGs]

            // Animate the translation on each click
            this.sliderAnime(this.slider_vGs,null,value_vGs,currentDifference,()=>{
              // for updating side by side Ig
              this.slider_R.setValue(value_iG)
            })
            currentDifferenceIndex_vGs++;

            // !we using temptitle10 as a record btn
            // this.btn_record.item.click()
            
            // * show arrow for vIn
            switch(value_vGs){
              case 25:
                setCC("For this 25 kilo ohms gate resistance, the gate current Ig is negligible.")
                setTimeout(()=>{
                  Dom.setBlinkArrowRed(true,0,-20,35,null,90).play()
                  setCC("Click on the input voltage vin slider and set the RMS voltage to 15 Volts.")
                },7000)
                break;
                
              case 750:
                setCC("Now click on the plot icon to see the SCR turn on characteristics.  The on state forward voltage drop is very small and current through it is high.")
                Dom.setBlinkArrowRed(true,535,-30,35,null,90).play()
                break;
              
              case 150:
                Dom.setBlinkArrowRed(true,535,-30,35,null,90).play()

              case 50:
                Dom.setBlinkArrowRed(true,535,-30,35,null,90).play()
            }
          }
        }

        // ! vIn onclick 
        this.slider_vIn.item.onclick = ()=>{
          let value_vIn = 15
          var left = 138
          this.sliderAnime(this.slider_vIn,0,value_vIn,left)

          // * show arrow for vGs
          Dom.setBlinkArrowRed(true,535,-30,35,null,90).play()
          setCC("Click on the plot icon")
        }
       
        break

      case "1_2":
        this.slider_vIn.set(10,-57,23).zIndex(10)
        this.slider_vIn_label.set(225,-56)

        this.slider_vGs.set(20,368,23).zIndex(10)
        this.slider_vGs_label.set(184,367)

        this.slider_R_label.set(440,349)
        
        // ! vGs onclick
        var differences_vGs = [140,117,85,54];
        var vals_vGs = [25,750,150,50]
        var vals_iG = [0,2,10,20]
        var currentDifferenceIndex_vGs = 0;
        // for the slider vgs
        var value_vGs = 0
        var value_iG = 0
        this.slider_vGs.item.onclick = ( )=>{
          if (currentDifferenceIndex_vGs < differences_vGs.length) {
            // Get the current difference
            var currentDifference = differences_vGs[currentDifferenceIndex_vGs];
            
            // setting the value of label
            value_vGs = vals_vGs[currentDifferenceIndex_vGs]
            value_iG = vals_iG[currentDifferenceIndex_vGs]

            // Animate the translation on each click
            this.sliderAnime(this.slider_vGs,null,value_vGs,currentDifference,()=>{
              // for updating side by side Ig
              this.slider_R.setValue(value_iG)
            })
            currentDifferenceIndex_vGs++;

            // !we using temptitle10 as a record btn
            // this.btn_record.item.click()
            
            // * show arrow for vIn
            switch(value_vGs){
              case 25:
                setCC("For this 25 kilo ohms gate resistance, the gate current Ig is negligible.")
                setTimeout(()=>{
                  Dom.setBlinkArrowRed(true,0,-20,35,null,90).play()
                  setCC("Click on the input voltage vin slider and set the RMS voltage to 15 Volts.")
                },7000)
                break;
                
              case 750:
                setCC("Now click on the plot icon to see the SCR turn on characteristics.  The on state forward voltage drop is very small and current through it is high.")
                Dom.setBlinkArrowRed(true,535,-30,35,null,90).play()
                break;
              
              case 150:
                Dom.setBlinkArrowRed(true,535,-30,35,null,90).play()

              case 50:
                Dom.setBlinkArrowRed(true,535,-30,35,null,90).play()
            }
          }
        }

        // ! vIn onclick 
        this.slider_vIn.item.onclick = ()=>{
          let value_vIn = 15
          var left = 138
          this.sliderAnime(this.slider_vIn,0,value_vIn,left)

          // * show arrow for vGs
          Dom.setBlinkArrowRed(true,535,-30,35,null,90).play()
          setCC("Click on the plot icon")
        }
        
        break
          
      case "2":
        this.slider_vIn.set(34,-44,23).zIndex(10)
        this.slider_vIn_label.set(185,-10)

        this.slider_vGs.set(4,364-18,23).zIndex(10)
        this.slider_vGs_label.set(242,364-18)
        
        this.slider_R.set(329,362-18,23).zIndex(10)
        this.slider_R_label.set(502,364-18)

        
        // ! vGs onclick
        var differences = [69, 27, 26, 28, 25, 25, 19];
        var currentDifferenceIndex = 0;
        // for the slider vgs
        var value_vGs = 0
        this.slider_vGs.item.onclick = ( )=>{
          if (currentDifferenceIndex < differences.length) {
            // Get the current difference
            var currentDifference = differences[currentDifferenceIndex];
            if(currentDifferenceIndex==0)
              value_vGs = 4
            else
              value_vGs++
    
            // Animate the translation on each click
            this.sliderAnime(this.slider_vGs,currentDifference,value_vGs)

            if(currentDifferenceIndex==0){
              // * show arrow for vIn
              Dom.setBlinkArrowRed(true,22,-90,35,null,-90).play()
              setCC("Select V<sub>in</sub>")
            }
            else if(currentDifferenceIndex == differences.length - 1){
              // * show arrow for plot
              Dom.setBlinkArrowRed(true,802,30,35,null,-90).play()
              setCC("Click on 'Plot'")
            }
            else{
              // * show arrow for vGs
              Dom.setBlinkArrowRed(true,0,302,35,null,-90).play()
              setCC("Select V<sub>GS</sub>")
            }
            
            currentDifferenceIndex++;

            // !we using temptitle10 as a record btn
            this.btn_record.item.click()
          }
        }

        // ! vIn onclick 
        this.slider_vIn.item.onclick = ()=>{
          let value_vIn = 200
          this.sliderAnime(this.slider_vIn,0,value_vIn,159)

          // * show arrow for vGs
          Dom.setBlinkArrowRed(true,0,302,35,null,-90).play()
          setCC("Select V<sub>GS</sub>")
        }

        // ! R onclick 
        this.slider_R.item.onclick = ()=>{
          let value_R = 50
          this.sliderAnime(this.slider_R,0,value_R,376)

          // * show arrow for vGs
          Dom.setBlinkArrowRed(true,0,302,35,null,-90).play()
          setCC("Select V<sub>GS</sub>")
        }
        break
    }
  },
  sliderAnime(target,translateX,value,left="",complete=null){
    anime({
      targets: target.item,
      translateX: `+=${translateX}`, 
      left: left,
      easing: 'easeInOutQuad', 
      duration: 600, 
      complete: ()=> {
        if(complete!=null){
          complete()
        }
        this.updateLabels()
      }
    });
    // set value of slider
    target.item.attributes['value'].value = value
  },
  updateLabels(){
    this.slider_vIn_label.setContent(
      `${this.getVal(this.slider_vIn)} V`
    )
    // for 25k ohms 
    let vgs_val = this.slider_vGs.getValue()
    if(vgs_val==25){
      vgs_val = `${vgs_val}K`
    }
    this.slider_vGs_label.setContent(
      `${vgs_val} Ω`
    )
    this.slider_R_label.setContent(
      `${this.getVal(this.slider_R)} mA`
    )
  },
  labelAnime(target,value){
    // let currentValue = Number(target.item.innerHTML.slice(0,target.item.innerHTML.indexOf("<")))

    // anime({
    //   targets: target.item,
    //   duration: 600,
    //   easing: "linear",
    //   innerHTML: [currentValue,]
    // })
  },
  getVal(dom){
    return dom.item.attributes['value'].value
  },
  showSlider(part){
    setTimeout(() => {
      sliders.init()
      // Change this for your step
      sliders.showSliderFor(part)
    }, 1000); 
  }
}

sliders.init()


