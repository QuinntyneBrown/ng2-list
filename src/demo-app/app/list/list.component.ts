import { Component, Input } from "@angular/core";

@Component({
    template: require("./list.component.html"),
    styles: [require("./list.component.scss")],
    selector: "list"
})
export class ListComponent {

    private _categories: Array<any> = [];

    private _items: Array<any> = [];

    private _title: string;

    @Input('items')
    public set items(value: any) { this._items = value; }

    @Input('categories')
    public set categories(value: any) { this._categories = value; }

    @Input('title')
    public set title(value: any) { this._title = value; }
}
