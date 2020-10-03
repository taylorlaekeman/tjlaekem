.PHONY: build install lint lint-fix run

install:
	npm install

build-app:
	CI=false npm run build

build-storybook:
	CI=false npm run build-storybook -o storybook

run:
	npm start

lint:
	npx eslint src --ext .ts,.tsx

lint-fix:
	npx eslint src --ext .ts,.tsx --fix
