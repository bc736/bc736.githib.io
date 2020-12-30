define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
 var API = new APIConstructor();
		
	return iatExtension({
		
		nCategoryAttributeBlocks : 2, 
		
		practiceBlock : false, 
		
		isTouch: true, //Set whether the task is on a touch device.
		
		instTemplateTouch: '<div><p align="center" ' +
				'<br/><font color="#000000"><u>Part blockNum of nBlocks </u><br/></p>' + 
				'<p align="left" style="margin-left:5px"> ' +
				'Put a right finger on the <b>right</b> green area that will be shown for items that belong to the category ' + 
				'<font color="#0000FF">focalAtt</font>, ' + 
				'and for items that belong to the category <font color="#31b404">focalCat</font>.<br/>' + 
				'Put a left finger on the <b>left</b> green area for items that do not belong to these categories.<br/>' + 
				'Go FAST. If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
				'Press the other side to continue.<br/>' + 
				'<p align="center">Touch the <b>lower </b> green area to start.</font></p></div>', 	
				leftKeyTextTouch : 'Left for all else', 
				rightKeyTextTouch : 'Right if item belongs', 
		 remindErrorTextTouch : '<p align="center" style="font-size:"1.4em"; font-family:arial">' +
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
			'Touch the other side to continue.<p/>',	
				attribute1 : 
			{
				name : 'Like', 
				title : {
					media : {word : 'Like'}, 
					css : {color:'#0000FF','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {word : 'Like, Enjoy, Pleasure, Favourite'}, 
						css : {color:'#0000FF','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Like'}, 
					{word : 'Enjoy'}, 
					{word : 'Pleasure'}, 
					{word : 'Favourite'}
				], 
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2em'}
			},	
			attribute2 : 
			{
				name : 'Dislike', 
				title : {
					media : {word : 'Dislike'}, 
					css : {color:'#0000FF','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {word : 'Dislike, Disgust, Horrible, Worst'}, 
						css : {color:'#0000FF','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Dislike'}, 
					{word : 'Disgust'}, 
					{word : 'Horrible'}, 
					{word : 'Worst'}
				], 
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2em'} 
				},
				categories : [  //As many categories you need.
				{
						
					name : 'Bullying', //Will appear in the data.
					title : {
						media : {word : 'Bullying'}, //Name of the category presented in the task.
						css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
						height : 4, //Height (because we need to know where to put the next item in the title)
						startStimulus : { 
						//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						        media : {word : 'Degrading, Humiliating, Intimidating, Abusing, Harassing, Threatening'}, 
							css : {color:'#31b404','font-size':'1em'}, 
							height : 13
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Degrading'},
					{word : 'Intimidating'},
					{word : 'Humiliating'},
					{word : 'Abusing'},
					{word : 'Harassing'},
					{word : 'Threatening'}
					], 
					//Stimulus css (style of the stimuli)
					stimulusCss : {color:'#31b404','font-size':'2em'}
				},	
				{
					name : 'Supportive', 
					title : {
						media : {word : 'Supportive'}, 
						css : {color:'#31b404','font-size':'1.8em'}, 
						height : 4,
						startStimulus : {
							media : {word : 'Supporting, Encouraging, Valuing, Respecting, Appreciating, Inclusive'}, 
							css : {color:'#31b404','font-size':'1em'}, 
							height : 13
						
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Supporting'},
					{word : 'Encouraging'},
					{word : 'Valuing'},
					{word : 'Respecting'},
					{word : 'Appreciating'},
					{word : 'Inclusive'}
					], 
					//Stimulus css
					stimulusCss : {color:'#31b404','font-size':'2em'}
				}
			],
			base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
			}, 
			
		
	});
});
