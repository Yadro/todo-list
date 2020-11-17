import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { Button, Menu } from 'semantic-ui-react';
import { InputWithKeyHandle } from './InputWithKeyHandle';
import CategoryStore  from 'services/CategoryStore';
import { Category } from 'entities/Category';

interface MenuItemProps {
    category: Category;
}

const MenuItem = observer(({ category }: MenuItemProps): JSX.Element => {
    const onChange = action((event) => {
        category.name = event.target.value;
    });

    const onPressEnter = action(() => {
        category.isEditable = false;
    });

    function onClick(category: Category) {
        CategoryStore.setCategory(category);
    }

    return (
        <Menu.Item onClick={() => onClick(category)}>
            {category.isEditable ?
                <InputWithKeyHandle
                    value={category.name}
                    onChange={onChange}
                    onPressEnter={onPressEnter}
                /> :
                category.name
            }
        </Menu.Item>
    );
});

export default observer(function LeftPanel(): JSX.Element {
    const categories = CategoryStore.categories;

    function addCategory() {
        CategoryStore.addCategory();
    }

    return (
        <div>
            <Menu vertical>
                {categories.map((category) => (
                    <MenuItem key={category.id} category={category}/>
                ))}
            </Menu>
            <Button
                disabled={categories.some(i => i.isEditable)}
                onClick={addCategory}
            >
                + Add category
            </Button>
        </div>
    );
});
