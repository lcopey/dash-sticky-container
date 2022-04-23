import dash_sticky_container
import dash
from dash import html, dcc
from dash.dependencies import Input, Output
import dash_html_components as html

with open('long.txt', mode='r', encoding='utf-8') as f:
    lines = f.readlines()
lines = ' '.join(lines)

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_sticky_container.DashStickyContainer(
        id='input',
        title='Test :',
        top='20px',
        children=[html.Div('Label'), dcc.Dropdown(options=[f'input-{n+1}' for n in range(10)])]
    ),
    html.Div(id='long-div', children=lines)
])


if __name__ == '__main__':
    app.run_server(debug=True)
