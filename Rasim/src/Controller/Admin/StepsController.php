<?php

namespace App\Controller\Admin;

use App\Controller\AppController; 
use Cake\Validation\Validator;

use Cake\Utility\Text;
use Cake\Cache\Cache;

class StepsController extends AppController{

    public function initialize(): void{
        parent::initialize();
        $this->loadModel('Steps');
        $this->loadComponent('Paginator');
    }

    public function index(){
        $model = 'Steps';

        $cur_page = 1;
        if( isset($_GET['page']) && is_int(intval($_GET['page'])) ){
            $cur_page = $_GET['page'];
        }
        $per_page = 10;
        $offset = ($cur_page * $per_page) - $per_page;
        $pag_settings = [
            'limit' => $per_page,
        ];

        $data = $this->$model->find('all')->orderDesc('item_order')
            ->limit($per_page)->offset($offset)
            ->toList();

        $this->set( compact('data') );

        $this->set('pagination', $this->paginate(
            $this->$model->find('all')
            ->orderDesc('item_order')
            ->limit($per_page), 
            $pag_settings
        ));
    }

    public function add(){
        $model = 'Steps';

        if( $this->request->is('post') ){
            $data = $this->request->getData();

            if( isset($data['img']) && $data['img'] ){
                $imageObject = $data['img'];
                $fileName = $imageObject->getClientFilename();
                unset($data['img']);
            }

            $entity = $this->$model->newEntity($data);

            if( isset($fileName) && $fileName ){
                $entity->img = $imageObject;
                if( $entity->get('img') == false ){
                    $entity->setError('img', [__('Ошибка валидации изображения')]);
                }
            }

            if( $entity->getErrors() ){
                $errors = $entity->getErrors();
                foreach( $errors as $index => $err ){
                    $this->Flash->error( $err[array_key_first($err)] );
                }
                return $this->redirect( $this->referer() );
            }

            if( $this->$model->save($entity) ){
                $this->Flash->success(__('Данные успешно сохранены'));
                Cache::delete('steps', 'long');
                return $this->redirect( $this->referer() );
            } else{
                $this->Flash->error(__('Ошибка сохранения данных'));
            }
        }

        // $this->set( compact('cats_sel') );
    }

    public function edit($item_id = null){
        $model = 'Steps';

        $data = $this->$model->get($item_id);

        if ($this->request->is(['post', 'put'])) {
            $data1 = $this->request->getData();

            if( isset($data1['img']) && $data1['img'] ){
                $imageObject = $data1['img'];
                $fileName = $imageObject->getClientFilename();
                unset($data1['img']);
            }

            $entity = $this->$model->newEntity($data1);

            if( isset($fileName) && $fileName ){
                $entity->img = $imageObject;
                if( $entity->get('img') == false ){
                    $entity->setError('img', [__('Ошибка валидации изображения')]);
                }
            }

            if( $entity->getErrors() ){
                $errors = $entity->getErrors();
                foreach( $errors as $index => $err ){
                    $this->Flash->error( $err[array_key_first($err)] );
                }
                return $this->redirect( $this->referer() );
            }

            $new_data = $entity->toArray();
            $this->$model->patchEntity($data, $new_data);

            if ($this->$model->save($data)) {
                $this->Flash->success(__('Изменения сохранены'));
                Cache::delete('steps', 'long');
                return $this->redirect( $this->referer() );
            }
            $this->Flash->error(__('Ошибка сохранения'));
        }

        $this->set( compact('data') );
    }

    public function delete($item_id = null){
        $model = 'Steps';
        
        $this->request->allowMethod(['post', 'delete']);
        $data = $this->$model->get($item_id);

        if ($this->$model->delete($data)) {
            $this->Flash->success(__('Элемент успешно удален'));
            Cache::delete('steps', 'long');
            return $this->redirect( $this->referer() );
        } else{
            $this->Flash->error(__('Ошибка удаления'));
        }
    }
}


 ?>