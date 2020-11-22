import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import Category from 'entities/Category';
import CategoryStore from 'services/CategoryStore';

interface Props {
    category: Category;
}

export default function TodoListMenu(props: Props): JSX.Element {
    const { category } = props;
    const defaultCategory = CategoryStore.categories[0];

    function onDelete(): void {
        CategoryStore.removeItem(category);
        CategoryStore.setCategory(defaultCategory);
    }

    return (
        <Dropdown icon='ellipsis vertical'>
            <Dropdown.Menu>
                <Dropdown.Item>Rename</Dropdown.Item>
                {category.id !== defaultCategory.id &&
                    <Dropdown.Item onClick={onDelete}>
                        Remove list
                    </Dropdown.Item>
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}
