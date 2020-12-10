define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
 var API = new APIConstructor();

	
	return iatExtension({
				
		nCategoryAttributeBlocks : 1, 
		attribute1 : 
			{
				name : 'Good', 
				title : {
					media : {word : 'Good'}, 
					css : {color:'#0000FF','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {word : 'Joy, Happy, Love, Good'}, 
						css : {color:'#0000FF','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Joy'}, 
					{word : 'Happy'}, 
					{word : 'Love'}, 
					{word : 'Good'}
				], 
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2em'}
			},	
			attribute2 : 
			{
				name : 'Bad', 
				title : {
					media : {word : 'Bad'}, 
					css : {color:'#0000FF','font-size':'1.8em'}, 
					height : 4,
					startStimulus : {
						media : {word : 'Horrible, Nasty, Terrible, Bad'}, 
						css : {color:'#0000FF','font-size':'1em'}, 
						height : 2
					}
				}, 
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Horrible'}, 
					{word : 'Nasty'}, 
					{word : 'Terrible'}, 
					{word : 'Bad'}
				], 
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2em'} 
				},
				categories : [  //As many categories you need.
				{
					name : 'Mental Ilness', //Will appear in the data.
					title : {
						media : {word : 'Mental Ilness'}, //Name of the category presented in the task.
						css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
						height : 4, //Height (because we need to know where to put the next item in the title)
						startStimulus : { 
						//If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
							media : {word : 'Mental illness, Mentally ill, Mentally disturbed', Mentally unbalanced'}, 
							css : {color:'#31b404','font-size':'1em'}, 
							height : 13
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Mental illness'},
					{word : 'Mentally ill'},
					{word : 'Mentally disturbed'},
					{word : 'Mentally unbalanced'}				
					], 
					//Stimulus css (style of the stimuli)
					stimulusCss : {color:'#31b404','font-size':'2em'}
				},	
				{
					name : 'Physical Disability', 
					title : {
						media : {word : 'Physical Disability'}, 
						css : {color:'#31b404','font-size':'1.8em'}, 
						height : 4,
						startStimulus : {
							media : {word : 'Physically impaired, Physical disability, Physically disabled, Physically handicapped'}, 
							css : {color:'#31b404','font-size':'1em'}, 
							height : 13						
						}
					}, 
					stimulusMedia : [ //Stimuli content as PIP's media objects
					{word : 'Physically handicapped'},
					{word : 'Physically disabled'},
					{word : 'Physically impaired'},
					{word : 'Physical disability'}
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
