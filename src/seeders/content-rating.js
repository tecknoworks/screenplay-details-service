const ContentRating = require('../models').contentRating

module.exports={
    seed: async function(){
        await ContentRating.insertMany(
            [
                {
                    rating: 'AP-12',
                    description: 'Parental guidance for children under 12.'
                },
                {
                    rating: 'AG',
                    description: 'General audience.'
                },
                {
                    rating: 'N-15',
                    description: 'Not recommended for children under 15.'
                },
                {
                    rating: 'IM-18',
                    description: 'Prohibited for minors under 18.'
                },
            ]
        )
    }
}