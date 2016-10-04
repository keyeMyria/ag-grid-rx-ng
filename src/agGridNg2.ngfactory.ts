/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './agGridNg2';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from './ng2FrameworkFactory';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
var renderType_AgGridNg2_Host:import0.RenderComponentType = (null as any);
class _View_AgGridNg2_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AgGridNg2_0_5:import3.AgGridNg2;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AgGridNg2_Host0,renderType_AgGridNg2_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ag-grid-ng2',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AgGridNg20(this.viewUtils,this.injector(0),this._appEl_0);
    this._AgGridNg2_0_5 = new import3.AgGridNg2(new import8.ElementRef(this._el_0),this._appEl_0.vcRef,this.parentInjector.get(import9.Ng2FrameworkFactory));
    this._appEl_0.initComponent(this._AgGridNg2_0_5,[],compView_0);
    compView_0.create(this._AgGridNg2_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._appEl_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AgGridNg2) && (0 === requestNodeIndex))) { return this._AgGridNg2_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._AgGridNg2_0_5.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._AgGridNg2_0_5.ngOnDestroy();
  }
}
function viewFactory_AgGridNg2_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AgGridNg2_Host === (null as any))) { (renderType_AgGridNg2_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_AgGridNg2_Host0(viewUtils,parentInjector,declarationEl);
}
export const AgGridNg2NgFactory:import11.ComponentFactory<import3.AgGridNg2> = new import11.ComponentFactory<import3.AgGridNg2>('ag-grid-ng2',viewFactory_AgGridNg2_Host0,import3.AgGridNg2);
const styles_AgGridNg2:any[] = [];
var renderType_AgGridNg2:import0.RenderComponentType = (null as any);
class _View_AgGridNg20 extends import1.AppView<import3.AgGridNg2> {
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AgGridNg20,renderType_AgGridNg2,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this.init([],[],[],[]);
    return (null as any);
  }
}
export function viewFactory_AgGridNg20(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.AgGridNg2> {
  if ((renderType_AgGridNg2 === (null as any))) { (renderType_AgGridNg2 = viewUtils.createRenderComponentType('/Users/sean/IdeaProjects/ag-grid/ag/ng2/ag-grid-ng2/src/agGridNg2.ts class AgGridNg2 - inline template',0,import10.ViewEncapsulation.None,styles_AgGridNg2,{})); }
  return new _View_AgGridNg20(viewUtils,parentInjector,declarationEl);
}