import _ from 'lodash';

const fields = [
    'textField',
    'checkbox',
    'radioBox',
    'emailField',
    'numberField',
    'selectField',
    'multiSelectField',
    'textAreaField',
    'fileUploadField',
];

export const suggestions = [
    { label: 'item1' },
    { label: 'item2' },
    { label: 'item3' },
    { label: 'item4' },
    { label: 'item5' },
    { label: 'item6' },
    { label: 'item7' },
    { label: 'item8' },
    { label: 'item9' },
    { label: 'item10' },
    { label: 'item11' },
    { label: 'item12' },
    { label: 'item13' },
    { label: 'item14' },
    { label: 'item15' },
    { label: 'item16' },
    { label: 'item17' },
    { label: 'item18' },
    { label: 'item19' },
    { label: 'item20' }
].map((suggestion, index) => ({
    value: index,
    label: suggestion.label,
}));

export const getRandomFields = () => {
    return new Promise((resolve, reject) => {
        let selected_fields = {};
        let fields_count = Math.floor(Math.random() * 100 % fields.length);

        for(let i = 1; i <= fields_count; i++) {
            let num = Math.floor(Math.random() * 100 % fields.length);
            selected_fields[fields[num]] = true;
        }


        //data for the dropdown
        let selected_items = [];
        let item_count = Math.floor(Math.random() * 100 % suggestions.length);

        for(let i = 1; i <= item_count; i++) {
            let num = Math.floor(Math.random() * 100 % suggestions.length);
            selected_items.push(suggestions[num]);
        }
        selected_items = _.orderBy(selected_items, 'value');
        selected_items = selected_items.filter(function(item, pos) {
            return selected_items.indexOf(item) === pos;
        });


        if(Object.keys(selected_fields).length > 0) {
            resolve({
                fields: selected_fields,
                items: selected_items
            });
        } else {
            reject('No selected fields');
        }
    });
};