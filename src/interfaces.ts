import {
    IHeaderGroup,
    IHeaderGroupParams,
    IHeader,
    IHeaderParams,
    IFilterParams,
    IDate,
    IDateParams,
    ICellRenderer,
    ICellRendererParams,
    ICellEditor,
    ICellEditorParams,
    IFilter,
    IAfterGuiAttachedParams
} from "ag-grid-rx/main";

export interface AgFrameworkComponent<T> {
    agInit(params:T) : void;

    afterGuiAttached?(params?: IAfterGuiAttachedParams): void;
}


export interface IHeaderGroupAngularComp extends IHeaderGroup, AgFrameworkComponent<IHeaderGroupParams> {}
export interface IHeaderAngularComp extends IHeader, AgFrameworkComponent<IHeaderParams> {}
export interface IDateAngularComp extends IDate, AgFrameworkComponent<IDateParams> {}
export interface IFilterAngularComp extends IFilter, AgFrameworkComponent<IFilterParams> {}
export interface ICellRendererAngularComp extends ICellRenderer, AgFrameworkComponent<ICellRendererParams> {}
export interface ICellEditorAngularComp extends ICellEditor, AgFrameworkComponent<ICellEditorParams> {}

export interface AgRendererComponent extends ICellRendererAngularComp {}
export interface AgEditorComponent extends ICellEditorAngularComp {}
export interface AgFilterComponent extends IFilterAngularComp {}
