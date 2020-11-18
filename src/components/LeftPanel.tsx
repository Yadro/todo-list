import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { Button, Label, Menu } from 'semantic-ui-react';
import { InputWithKeyHandle } from './InputWithKeyHandle';
import CategoryStore  from 'services/CategoryStore';
import TodoStore from 'services/TodoStore';
import Category from 'entities/Category';

interface MenuItemProps {
    category: Category;
}

const MenuItem = observer(({ category }: MenuItemProps): JSX.Element => {
    const onChange = action((event) => {
        category.name = event.target.value;
    });

    const onPressEnter = action(() => {
        category.isEditable = false;
        CategoryStore.saveData();
    });

    function onClick(category: Category) {
        CategoryStore.setCategory(category);
    }

    return (
        <Menu.Item
            onClick={() => onClick(category)}
            active={CategoryStore.currentCategory.id === category.id}
        >
            {category.isEditable ?
                <InputWithKeyHandle
                    value={category.name}
                    onChange={onChange}
                    onPressEnter={onPressEnter}
                /> :
                <>
                    {category.name}
                    <Label>{TodoStore.getCount(category)}</Label>
                </>
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
        <div className='left-panel'>
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
