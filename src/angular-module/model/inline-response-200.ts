/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { BrandJsonldLightRead } from './brand-jsonld-light-read';
import { InlineResponse200HydraView } from './inline-response-200-hydra-view';
import { InlineResponse200HydraSearch } from './inline-response-200-hydra-search';


export interface InlineResponse200 { 
    'hydra:member': Array<BrandJsonldLightRead>;
    'hydra:totalItems'?: number;
    'hydra:view'?: InlineResponse200HydraView;
    'hydra:search'?: InlineResponse200HydraSearch;
}
