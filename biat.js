define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
 var API = new APIConstructor();

	
	return iatExtension({
		
		nCategoryAttributeBlocks : 2, 
		
				
			categories : [  //As many categories you need.
				{
					name : 'Bullying', //Will appear in the data.
					title : {
						media : {word : 'Bullying'}, //Name of the category presented in the task.
						css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
						height : 4, //Height (because we need to know where to put the next item in the title)
						startStimulus : { 
						//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {word : 'Threatening, Degrading, Humiliating, Intimidating, Abusing, Harassing'},
							css : {color:'#31b404','font-size':'1em'}, 
							height : 13
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
				{word : 'Threatening'}, 
        			{word : 'Degarading'}, 
        			{word : 'Humiliating'}, 
        			{word : 'Intimidating'}, 
        			{word : 'Abusing'},
				{word : 'Harassing'}	
						
					], 
					//Stimulus css (style of the stimuli)
					stimulusCss : {color:'#31b404','font-size':'2em'}
				},	
										
					name : 'Bullying', //Will appear in the data.
					title : {
						media : {word : 'Bullying'}, //Name of the category presented in the task.
						css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
						height : 4, //Height (because we need to know where to put the next item in the title)
						startStimulus : { 
						//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
						media : {word : 'Threatening, Degrading, Humiliating, Intimidating, Abusing, Harassing'},
							css : {color:'#31b404','font-size':'1em'}, 
							height : 13
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
				{word : 'Threatening'}, 
        			{word : 'Degarading'}, 
        			{word : 'Humiliating'}, 
        			{word : 'Intimidating'}, 
        			{word : 'Abusing'},
				{word : 'Harassing'}	
						
					], 
					//Stimulus css (style of the stimuli)
					stimulusCss : {color:'#31b404','font-size':'2em'}
				},	
						],
					base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
				
			} 
	});
});



