define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/biat6.js'], function(APIConstructor, iatExtension){
 var API = new APIConstructor();
	
		
	return iatExtension({
		
		nCategoryAttributeBlocks : 1, 
		
		
		practiceBlock : false, 
		
		finalText : 'Press space to continue', 
				
		instTemplate: '<div><p align="center" style="font-size:20px; font-family:arial"><br/>' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a right finger on the <b>I</b> key for items that belong to the category ' + 
				'<font color="#0000FF">focalAtt</font>, ' + 
				'and for items that belong to the category <font color="#31b404">focalCat</font>.<br/>' + 
				'Put a left finger on the <b>E</b> key for items that do not belong to these categories.<br/><br/>' + 
				'Go FAST. If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
				'Press the other key to continue.<br/><br/>' + 
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
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

