
export function changeBreadcrumb(name, properties) {
    return {
        'type': 'CHANGE_BREADCRUMB',
        'payload': {
            'name': name,
            properties,
        },
    };
}
