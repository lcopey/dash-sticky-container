# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashStickyContainer(Component):
    """A DashStickyContainer component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- children (boolean | number | string | dict | list; optional)

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional)

- title (string; optional)

- top (string; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, title=Component.UNDEFINED, className=Component.UNDEFINED, top=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'title', 'top']
        self._type = 'DashStickyContainer'
        self._namespace = 'dash_sticky_container'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'title', 'top']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashStickyContainer, self).__init__(children=children, **args)
