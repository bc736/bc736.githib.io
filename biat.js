define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
 var API = new APIConstructor();

	
	return iatExtension({
		
		nCategoryAttributeBlocks : 2,
		
		practiceCategory1 : 
			{
				name : 'Mammals', //Will appear in the data.
				title : {
					media : {word : 'Mammals'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
					height : 4, //Height (because we need to know where to put the next item in the title)
					startStimulus : { 
					//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {word : 'Dogs, Horses, Cows, Lions'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Dogs'}, 
					{word : 'Horses'}, 
					{word : 'Lions'}, 
					{word : 'Cows'}
				], 
				//Stimulus css (style of the stimuli)
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},	
			practiceCategory2 : 
			{
				name : 'Birds', 
				title : {
					media : {word : 'Birds'}, 
					css : {color:'#31b404','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {word : 'Pigeons, Swans, Crows, Ravens'}, 
						css : {color:'#31b404','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Pigeons'}, 
					{word : 'Swans'}, 
					{word : 'Crows'}, 
					{word : 'Ravens'}
				], 
				//Stimulus css
				stimulusCss : {color:'#31b404','font-size':'2em'}
			},
			categories : [  //As many categories you need.
				{
					name : 'Bullying', //Will appear in the data.
					title : {
						media : {word : 'xx}, //Name of the category presented in the task.
						css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
						height : 4, //Height (because we need to know where to put the next item in the title)
						startStimulus : { 
						//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {word : 'Threatening, Degrading, Humiliating, Intimidating, Abusing, Harassing}, 
							css : {color:'#31b404','font-size':'1em'}, 
							height : 13
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Threatening'}, 
        			        {word : 'Degrading'}, 
					{word : 'Humiliating'}, 
				        {word : 'Intimidating'}, 
				        {word : 'Abusing'}, 
					{word : 'Harassing'} 					
        				], 
					//Stimulus css (style of the stimuli)
					stimulusCss : {color:'#31b404','font-size':'2em'}
				},	
				{
					name : 'Bullying', 
					title : {
						media : {word : 'xxx'}, 
						css : {color:'#31b404','font-size':'1.8em'}, 
						height : 4,
						startStimulus : {
						media : {word : 'Threatening, Degrading, Humiliating, Intimidating, Abusing, Harassing}, 
						css : {color:'#31b404','font-size':'1em'}, 
							height : 13
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
                                        {word : 'Threatening'}, 
        			        {word : 'Degrading'}, 
					{word : 'Humiliating'}, 
				        {word : 'Intimidating'}, 
				        {word : 'Abusing'}, 
					{word : 'Harassing'}, 									], 
					//Stimulus css
					stimulusCss : {color:'#31b404','font-size':'2em'}
				}
			],
							
			} 
			    
			    attribute1 : 
			{
				name : 'Like', 
				title : {
					media : {word : 'Like'}, 
					css : {color:'#0000FF','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {word : 'Enjoy, Pleasure, Favourite, Like'}, 
						css : {color:'#0000FF','font-size':'1em'}, 
						height : 2
					}
			    
			    		    
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Enjoy'}, 
					{word : 'Pleasure'}, 
					{word : 'Favourite'}, 
					{word : 'Like'}
				], 
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2em'}
			},	
			attribute2 : 
			{
				name : 'Like', 
				title : {
					media : {word : 'Like'}, 
					css : {color:'#0000FF','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {word : 'Enjoy, Pleasure,Favourite, Like'}, 
						css : {color:'#0000FF','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Enjoy'}, 
					{word : 'Pleasure'}, 
					{word :  Favourite'}, 
					{word : 'Like'}
				], 
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2em'} 
			    },
			      			    
	});
});

