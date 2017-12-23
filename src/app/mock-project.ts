import { tags } from './mock-tags'

export class project{
    id: number;
    name: string;
    short_des: string;
    is_pre_sale: boolean;
    image_url: string;
    interest: string;
    category_type: string;
    category_name: string;
    goal: string;
    start_date: string;
    end_date: string;
    tags: tags;
    is_rated: boolean;
}