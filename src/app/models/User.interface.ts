export interface User {
    name: string;
    type: 'grower' | 'warehouse';
    address: string;
    phone_number: string;
    gender: 'male' | 'female';
    batches_handled?: string;
    yield_acquired?: number;
    greenhouse_locations?: string;
    years_of_experience?: number;
    educational_qualification?: string;
    inventory_management_certification?: 'yes' | 'no';
}
