const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nonprofitSchema = new Schema({
    name: String,
    contact: String,
    email: String,
    address: String,
    city: String,
    location: {
        type: String,
        enum: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Deleware', 'District of Columbia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Virgin Islands', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
    zip: Number,
    phone: Number,
    category: {
        type: String,
        enum: ['Aging', 'Agriculture and Food', 'Arts and Culture', 'Athletics and Sports', 'Children and Youth', 'Civil Society', 'Community and Economic Development', 'Computers and Technology', 'Consumer Protection', 'Crime and Safety', 'Disabilities', 'Domestic Violence', 'Education and Literacy', 'Employment and Labor', 'Energy and Environment', 'LGBTQI', 'Government Reform', 'Health and Wellness', 'Housing and Homelessness', 'Human Rights and Civil Liberties', 'Humanitarian and Disaster Relief', 'Hunger', 'Immigration', 'Journalism and Media', 'Men and Boys', 'Nonprofits and Philanthropy', 'Parenting and Families', 'Poverty', 'Prison and Judicial Reform', 'Race and Ethnicity', 'Religion', 'Science', 'Substance Abuse and Recovery', 'Transportation', 'Welfare and Public Assistance', 'Women and Girls'],
    },
    website: String,
    guidestarProfile: String,
    missionStatement: String,
    aboutUs: String,
});

module.exports = mongoose.model('Nonprofit', nonprofitSchema);